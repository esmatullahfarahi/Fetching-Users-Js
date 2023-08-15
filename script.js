// Global variables
let isLoading = true;
let allUsers = [];

// Function to load user data from API
const loadUserData = async () => {
  try {
    isLoading = true;
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch user data');
    allUsers = await response.json();
    console.log(allUsers)
  } catch (error) {
    console.error('Error loading user data:', error);
  } finally {

    isLoading = false;
  }
};


// Load user data and initial rendering on page load
loadUserData();
