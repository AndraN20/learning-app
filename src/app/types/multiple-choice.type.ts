import { Answer } from "./answer.type";

export interface MultipleChoice {
    question: string;
    answers: Answer[];
}