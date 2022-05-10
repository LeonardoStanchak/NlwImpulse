import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe("Submit Feedback", () => {
  it("should be able to submit feedback",async () => {
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(submitFeedbackUseCase.excute({
        type: 'BUG',
        comment: 'Teste',
        screenshot:'test.jpg'
    })).resolves.not.toThrow();
  });
});
