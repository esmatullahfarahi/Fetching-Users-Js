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
     renderUsers(allUsers);
    console.log(allUsers)

  } catch (error) {
    console.error('Error loading user data:', error);
  } finally {

    isLoading = false;
  }
};

// Function to render users
const renderUsers = (users) => {
  const container = document.getElementById('userDataDisplay');
  container.innerHTML = isLoading
    ? 'Loading data...'
    : users.length === 0
    ? 'No users found or no data available.'
    : users
        .map(
          user => `
            <div class="user-card">
              <h2>${user.name}</h2>
              <p>Email: ${user.email}</p>
              <p>Phone: ${user.phone}</p>
               <p>Website: ${user.phone}</p>
               <div class="address">
                <h3>Address:</h3>
                <p>Street: ${user.address.street}</p>
                <p>Suite: ${user.address.suite}</p>
                <p>City: ${user.address.city}</p>
                <p>Zip: ${user.address.zipcode}</p>
            </div>
             <div class="company">
                <h3>Company:</h3>
                <p>Name: ${user.company.name}</p>
                <p>Catchphrase: ${user.company.catchPhrase}</p>
                <p>BS: ${user.company.bs}</p>
            </div>
            </div>
          `
        )
        .join('');
};


// Load user data and initial rendering on page load
loadUserData();
