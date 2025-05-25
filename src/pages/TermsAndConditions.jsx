import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Vendor Registration Terms for Fenet Decor Wedding Platform
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-600 text-lg leading-relaxed">
              By registering as a vendor on our wedding planning platform, you agree to comply with the following terms and conditions. Please read them carefully before proceeding with your registration.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  1
                </span>
                Eligibility
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• Vendors must be legally registered businesses or individuals authorized to offer wedding-related services (e.g., catering, photography, decoration, etc.).</p>
                <p>• You must be at least 18 years old to register and operate as a vendor on our platform.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  2
                </span>
                Registration Fee
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• Vendors are required to pay <strong className="text-purple-600">10% of their annual revenue</strong> as a platform registration fee.</p>
                <p>• Revenue must be declared truthfully and supported by financial documentation upon request.</p>
                <p>• The fee is payable annually and must be paid in full before listing any services on the platform.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  3
                </span>
                Verification of Revenue
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• Vendors agree to submit accurate and verifiable financial data for assessment.</p>
                <p>• Fenet Decor reserves the right to audit or request supporting documents to verify revenue claims.</p>
                <p>• Failure to provide accurate revenue information may result in suspension or removal from the platform.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  4
                </span>
                Listing Services
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• Vendors are responsible for the accuracy and legality of their listed services and pricing.</p>
                <p>• All content uploaded (images, descriptions, offers) must be owned or properly licensed by the vendor.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  5
                </span>
                Platform Commission
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• In addition to the registration fee, the platform may charge a commission on each successful booking.</p>
                <p>• Commission details will be specified separately in your vendor agreement.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  6
                </span>
                Compliance
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• Vendors must comply with all applicable local, state, and national laws.</p>
                <p>• Misleading advertising, fraudulent behavior, or unprofessional conduct will result in removal from the platform.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  7
                </span>
                Refund Policy
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• The 10% annual fee is <strong className="text-red-600">non-refundable</strong> unless explicitly stated otherwise in a written agreement.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  8
                </span>
                Termination
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• Fenet Decor reserves the right to suspend or terminate vendor accounts at its sole discretion.</p>
                <p>• Termination may occur in cases of violation of these terms or failure to pay fees.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  9
                </span>
                Limitation of Liability
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• The platform is not responsible for disputes between vendors and clients. However, we may assist in mediation at our discretion.</p>
                <p>• We are not liable for any losses incurred due to inaccurate listings, miscommunication, or service failures.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                  10
                </span>
                Modifications to Terms
              </h2>
              <div className="ml-11 space-y-3 text-gray-700">
                <p>• These terms may be updated at any time.</p>
                <p>• Continued use of the platform implies agreement with the updated terms.</p>
              </div>
            </section>
          </div>

          {/* Important Notice */}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-purple-800 mb-2">Important Notice</h3>
            <p className="text-purple-700">
              By checking the "I agree to the Terms and Conditions" box during registration, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined above.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              For questions about these terms, please contact us at{" "}
              <a href="mailto:wondmuabyalew@gmail.com" className="text-purple-600 hover:text-purple-800 font-medium">
                wondmuabyalew@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
