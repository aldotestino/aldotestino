interface StackIconProps {
  text: string
}

function StackIcon({ text }: StackIconProps) {
  return (
    <div className="w-full shadow-md h-48 bg-gradient-to-r from-indigo-500 to-green-500 py-10 flex items-center justify-center rounded-lg">
      <p className="text-gray-50 text-4xl font-semibold">
        {text}
      </p>
    </div>
  );
}

export default StackIcon;
