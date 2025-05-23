import React, { useState, useEffect } from "react";
import {
  SimpleForm,
  TextInput,
  SaveButton,
  useNotify,
  useRedirect,
  required,
  Toolbar,
  useGetIdentity,
  Title,
  email as emailValidator,
  FormTab,
  TabbedForm,
  LoadingIndicator,
} from "react-admin";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Box,
  Tab,
  Tabs,
  CircularProgress,
  Alert,
  Avatar,
} from "@mui/material";
import { adminService } from "../../../../services/api";

const AccountEditToolbar = (props) => {
  return (
    <Toolbar {...props}>
      <SaveButton label="Update Information" />
    </Toolbar>
  );
};

const validatePasswordMatch = (value, allValues) => {
  if (value && value !== allValues.password) {
    return "Passwords do not match";
  }
  return undefined;
};

const validatePasswordStrength = (value) => {
  if (!value) return undefined;

  // Password must be at least 6 characters long (as per backend)
  const hasMinLength = value.length >= 6;

  if (!hasMinLength) return "Password must be at least 6 characters";

  return undefined;
};

const validatePhone = (value) => {
  if (!value) return undefined;

  // Simple phone validation - can be expanded based on requirements
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  if (!phoneRegex.test(value)) {
    return "Please enter a valid phone number";
  }

  return undefined;
};

const PasswordEdit = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const { identity, isLoading: identityLoading } = useGetIdentity();
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [profileData, setProfileData] = useState({
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    avatar: null,
    role: "",
  });

  // Fetch user profile data from the API
  useEffect(() => {
    const fetchUserProfile = async () => {
      setFetchLoading(true);
      try {
        console.log("Fetching admin profile from /user/profile endpoint...");
        const response = await adminService.getProfile();
        console.log("Admin profile response:", response);
        const profile = response.data.profile || response.data;

        // Update profile data with real values from the API
        setProfileData({
          id: profile.id || "",
          email: profile.email || "",
          firstName: profile.firstName || "",
          lastName: profile.lastName || "",
          phone: profile.phone || "",
          avatar: profile.avatar,
          role: profile.role || "ADMIN",
        });
        console.log("Profile data set successfully:", profile);

        setFetchError(null);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setFetchError(
          `Failed to load your profile: ${
            error.message || "Unknown error"
          }. Check that the /user/profile endpoint is available.`
        );
        notify(`Error loading profile data: ${error.message}`, {
          type: "error",
        });
      } finally {
        setFetchLoading(false);
      }
    };

    fetchUserProfile();
  }, [notify]);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      // Filter out empty fields and confirmPassword field that shouldn't be sent to the API
      const updateData = Object.keys(values).reduce((acc, key) => {
        if (values[key] && key !== "confirmPassword" && key !== "userId") {
          acc[key] = values[key];
        }
        return acc;
      }, {});

      if (Object.keys(updateData).length === 0) {
        notify("No changes to update", { type: "warning" });
        setLoading(false);
        return;
      }

      // Send update request to the API
      const userId = profileData.id;
      if (!userId) {
        throw new Error("User ID not found");
      }

      const response = await adminService.updateAccount(userId, updateData);

      notify("Account updated successfully", { type: "success" });

      // Refresh the profile data
      const profileResponse = await adminService.getProfile();
      const profile = profileResponse.data.profile || profileResponse.data;
      setProfileData({
        id: profile.id || "",
        email: profile.email || "",
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        phone: profile.phone || "",
        avatar: profile.avatar,
        role: profile.role || "ADMIN",
      });
    } catch (error) {
      console.error("Error updating account:", error);
      notify(`Error updating account: ${error.message || "Unknown error"}`, {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="400px"
      >
        <CircularProgress />
        <Typography variant="body1" ml={2}>
          Loading your profile...
        </Typography>
      </Box>
    );
  }

  if (fetchError) {
    return (
      <Box p={3}>
        <Alert severity="error">{fetchError}</Alert>
      </Box>
    );
  }

  const initialValues = {
    userId: profileData.id,
    email: profileData.email,
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    phone: profileData.phone || "",
    password: "",
    confirmPassword: "",
  };

  return (
    <div>
      <Title title="Account Settings" />
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Administrator Account Information
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Update your personal information and password below.
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Admin profile summary */}
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  src={profileData.avatar}
                  alt={profileData.firstName}
                  sx={{ width: 80, height: 80 }}
                />
              </Grid>
              <Grid item xs>
                <Typography variant="h5">
                  {profileData.firstName} {profileData.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {profileData.email}
                </Typography>
                <Typography variant="body2" color="primary.main">
                  Administrator
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <TabbedForm
            toolbar={<AccountEditToolbar />}
            onSubmit={handleSubmit}
            initialValues={initialValues}
            warnWhenUnsavedChanges
          >
            <FormTab label="Profile Information">
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="firstName"
                      label="First Name"
                      fullWidth
                      helperText={`Current: ${
                        profileData.firstName || "Not set"
                      }`}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      source="lastName"
                      label="Last Name"
                      fullWidth
                      helperText={`Current: ${
                        profileData.lastName || "Not set"
                      }`}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      source="email"
                      type="email"
                      label="Email Address"
                      fullWidth
                      validate={[emailValidator()]}
                      helperText={`Current: ${profileData.email || "Not set"}`}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      source="phone"
                      label="Phone Number"
                      fullWidth
                      validate={[validatePhone]}
                      helperText={`Current: ${profileData.phone || "Not set"}`}
                    />
                  </Grid>
                </Grid>
              </Box>
            </FormTab>

            <FormTab label="Change Password">
              <Box mt={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextInput
                      source="password"
                      type="password"
                      label="New Password"
                      validate={validatePasswordStrength}
                      autoComplete="new-password"
                      fullWidth
                      helperText="Password must be at least 6 characters long"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      source="confirmPassword"
                      type="password"
                      label="Confirm New Password"
                      validate={validatePasswordMatch}
                      autoComplete="new-password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
            </FormTab>
          </TabbedForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordEdit;
