function Header() {
  return (
    <div className="flex justify-between p-10 bg-gray-50 border border-b-gray-200 font-semibold text-3xl">
      <span>My Todo</span>
      <div className="flex gap-10 text-xl font-normal">
        <span>다크모드</span>
        <span>내정보</span>
      </div>
    </div>
  );
}

export default Header;
