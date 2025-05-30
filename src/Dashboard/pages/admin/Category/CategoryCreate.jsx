import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { adminService } from "../../../../services/api";
import { toast } from "react-toastify";

const CategoryCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        image: "Image size should not exceed 5MB",
      }));
      return;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        image: "Please upload a valid image file (JPEG or PNG)",
      }));
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setErrors((prev) => ({ ...prev, image: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Category name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description || "");
      if (image) {
        formDataToSend.append("image", image);
      }

      await adminService.createServiceCategory(formDataToSend);
      toast.success("Category created successfully");
      navigate("/dashboard/category");
    } catch (error) {
      console.error("Error creating category:", error);
      toast.error(error.response?.data?.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/category");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create Service Category
      </Typography>

      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.name}>
                  <TextField
                    label="Category Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={!!errors.name}
                  />
                  {errors.name && (
                    <FormHelperText>{errors.name}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.image}>
                  <Typography variant="subtitle1" gutterBottom>
                    Category Image
                  </Typography>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-upload">
                    <Button variant="contained" component="span">
                      Upload Image
                    </Button>
                  </label>
                  {errors.image && (
                    <FormHelperText>{errors.image}</FormHelperText>
                  )}
                  {imagePreview && (
                    <Box mt={2}>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "200px",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}
                >
                  <Button
                    variant="outlined"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    startIcon={loading && <CircularProgress size={20} />}
                  >
                    {loading ? "Creating..." : "Create Category"}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CategoryCreate;
