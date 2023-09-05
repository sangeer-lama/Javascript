const prevBtns = document.querySelectorAll(".btn-prev");
      const nextBtns = document.querySelectorAll(".btn-next");
      const progress = document.querySelectorAll("#progress");
      const formStep = document.querySelectorAll(".form-step");
      const progressSteps = document.querySelectorAll(".progress-step");
      let formStepNum = 0;

      nextBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          formStepNum++;
          updateFormSteps();
          updateProgressBar();
        });
      });

      prevBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          formStepNum--;
          updateFormSteps();
          updateProgressBar();
        });
      });
      function updateFormSteps() {
        formStep.forEach((formSteps) => {
          formSteps.classList.contains("form-step-active") &&
            formSteps.classList.remove("form-step-active");
        });
        formStep[formStepNum].classList.add("form-step-active");
      }
      function updateProgressBar() {
        progressSteps.forEach((progressStep, idx) => {
          if (idx < formStepNum + 1) {
            progressStep.classList.add("progress-step-active");
          } else {
            progressStep.classList.remove("progress-step-active");
          }
        });
      }