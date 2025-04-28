import LinkButton from "./LinkButton";

function Opentimes() {
  return (
    <div className="px-4 py-4">
      <LinkButton to="-1">&larr; Back to menu</LinkButton>

      <p className="mt-7 sm:text-xl text-base font-semibold text-center text-gray-700 leading-7">
        <span className="font-bold text-lg">We are open 7 days a week,</span>
        <br /> from saturday to thursday from 10:00 AM to 8:00 PM and friday
        from 1:00 PM to 9:00 PM
      </p>
    </div>
  );
}

export default Opentimes;
