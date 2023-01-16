import { ButtonTypes } from "../../src/interfaces/reusables/button.d";

export function DivBtn({ text, icon }: ButtonTypes) {
  return (
    <div className="bg-black text-white px-1 rounded-sm flex flex-row">
      <div className="flex">
        <p>{text}</p>
      </div>
    </div>
  );
}
