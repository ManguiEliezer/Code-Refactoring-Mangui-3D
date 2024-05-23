async function getStudent(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'John Doe',
        isEnrolled: true,
        email: 'john.doe@example.com',
      });
    }, 4000);
  });
}

async function getCourseList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['course1', 'course2']);
    }, 4000);
  });
}

async function sendNotification(email, courses) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

async function main() {
  try {
    const student = await getStudent(1);
    console.log('Student: ', student);
    if (student.isEnrolled) {
      const courses = await getCourseList();
      console.log('Course List: ', courses);
      await sendNotification(student.email, courses);
      console.log('Notification sent...');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();