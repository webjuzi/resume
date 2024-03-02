console.log("感谢您的浏览，我的个人主页：https://www.inav.site/");

function calculateWorkExperience() {
  const currentDate = new Date();
  const startDate = new Date(2017, 11); // JavaScript 中月份从 0 开始，所以 11 代表 12 月
  const yearsOfExperience = Math.round((currentDate - startDate) / (365.25 * 24 * 60 * 60 * 1000));
  return yearsOfExperience;
}
function updateWorkExperience() {
  const workExperienceElement = document.getElementById('workExperience');
  if (workExperienceElement) {
    workExperienceElement.textContent = calculateWorkExperience() + '年';
  }
}
function calculateAge(birthdate) {
  const currentDate = new Date();
  const birthdateDate = new Date(birthdate);
  let age = currentDate.getFullYear() - birthdateDate.getFullYear();
  if (currentDate.getMonth() < birthdateDate.getMonth() || (currentDate.getMonth() === birthdateDate.getMonth() && currentDate.getDate() < birthdateDate.getDate())) {
    age--; // 没过生日减一岁
  }
  return age;
}
function updateAge() {
  const ageElement = document.getElementById('age');
  if (ageElement) {
    const birthdate = '1997-06-10'; // 你的生日
    const age = calculateAge(birthdate);
    ageElement.textContent = `${age}岁`;
  }
}


window.onload = function() {
  updateWorkExperience(); // 更新工作年限
  updateAge(); // 更新年龄
}