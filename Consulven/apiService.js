import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:7388/api";

export const submitcontactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/contact/`, formData,{
            headers: {
                'Content-Type' : 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const submitEquiryForm = async (formDataToSubmit) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/enquiry/`, formDataToSubmit,{
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const submitcareerForm = async (formDataToSubmit) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/job/`, formDataToSubmit, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
        return response.data;
    } catch (error) {
        throw error;
    }
};

