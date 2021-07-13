/* Cac buoc xy ly 
    1/ call api lay list cau hoi
    2/ hien thi danh sach cau hoi ra man hinh
    3/ kiem tra cau hoi 
    4/ tinh diem
*/

let questionList = [];
const getListQuestion = () => {
  axios({
    method: "GET",
    url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
  })
    .then((res) => {
      const result = res.data;
      result.map((question) => {
        if (question.questionType === 1) {
          const mc = new MultipleChoice(
            question.id,
            question.content,
            question.questionType,
            question.answers
          );
          questionList.push(mc);
        }
        if (question.questionType === 2) {
          const mc = new FillInBlank(
            question.id,
            question.content,
            question.questionType,
            question.answers
          );
          questionList.push(mc);
        }
      });
      console.log(questionList);
      let contentHTML = "";
      questionList.map((question) => {
        contentHTML += question.render();
      });
      document.querySelector("#question").innerHTML = contentHTML;
    })
    .catch((error) => {
      console.error(error);
    });
};

getListQuestion();
// Lay ket qua da chon
document.getElementById("btn-checkMark").addEventListener("click", (e) => {
  let total = 0;
  e.preventDefault();
  questionList.map((question) => {
    if (question.checkExact()) {
      total += 1;
    }
  });
  console.log(`tong diem: ${total}`);
});

// document.getElementById("btn-checkMark").addEventListener("click", (e) => {
//   let total = 0;
//   e.preventDefault();
//   questionList.map((question) => {
//     question.checkExact();
//   });
//   console.log(`tong diem: ${total}`);
// });
