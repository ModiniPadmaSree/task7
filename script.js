async function fetchUsers() {
      const container = document.getElementById('user-container');
      const errorMsg = document.getElementById('error-message');
      container.innerHTML = ''; // Clear previous content
      errorMsg.textContent = ''; // Clear error

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
         const users = await response.json();

        users.forEach(user => {
          const card = document.createElement('div');
          card.className = 'user-card';
          card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        errorMsg.textContent = `Error fetching users: ${error.message}`;
      }
    }
        fetchUsers();