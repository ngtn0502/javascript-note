class Question {
  constructor(_id, _content, _questionType, _answers) {
    this.id = _id;
    this.content = _content;
    this.questionType = _questionType;
    this.answers = _answers;
  }
  render() {
    console.log("render");
  }
  checkExact() {
    console.log("check");
  }
}

class MultipleChoice extends Question {
  // INHERITANCE
  constructor(_id, _content, _questionType, _answers) {
    super(_id, _content, _questionType, _answers);
  }
  //   POLYMORPHISM
  render() {
    let content = "";
    this.answers.map((answer, index) => {
      content += `
      <div>
        <input name="mc-${this.id}" type="radio" id="mc-${this.id}-${index}" 
        value=${answer.exact}
        />
        <label for="mc-${this.id}-${index}">
          ${answer.content}
        </label>
      </div>
      `;
    });

    return `  <div class="ml-5">
        <h4>
          Cau hoi ${this.id}: ${this.content}
        </h4>
        ${content}
      </div>`;
  }
  checkExact() {
    /*  
      b1: lấy ra kết quả đã chọn
      b2: lấy ra kết quả đúng
      b3: so sánh
    */
    const listAnswer = document.getElementsByName(`mc-${this.id}`);
    let myChoice = "false";
    for (const answer of listAnswer) {
      if (answer.checked) {
        myChoice = answer.value;
        console.log(answer);
      }
    }
    return JSON.parse(myChoice);
  }
}

class FillInBlank extends Question {
  // INHERITANCE
  constructor(_id, _content, _questionType, _answers) {
    super(_id, _content, _questionType, _answers);
  }
  //   POLYMORPHISM
  render() {
    return `  
      <div class="ml-5">
        <h4>
          Cau hoi ${this.id}: ${this.content}
        </h4>
      </div> 
      <form class="ml-5">
        <input type="text" id="fb-${this.id}"/>
      </form>;`;
  }
  checkExact() {
    const answer = document.getElementById(`fb-${this.id}`).value;
    if (this.answers[0].content == answer) {
      return true;
    }
    return false;
  }
}
