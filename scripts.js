// Simulated data for courses (replace this with actual data from your backend)
const coursesData = [
  { id: 1, title: 'Introduction to Programming' },
  { id: 2, title: 'Web Development Fundamentals' },
  { id: 3, title: 'Data Science Basics' },
  // Add more course objects as needed
];

// Function to display courses in the UI
function displayCourses() {
  const courseList = document.getElementById('courseList');
  courseList.innerHTML = ''; // Clear any existing items

  coursesData.forEach(course => {
    const listItem = document.createElement('li');
    listItem.textContent = course.title;
    listItem.addEventListener('click', () => {
      // Add functionality to handle click on a course item
      console.log(`Clicked course: ${course.title}`);
    });
    courseList.appendChild(listItem);
  });
}

// Call the function to display courses when the page loads
window.addEventListener('load', displayCourses);
