/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  width: 5rem;
  justify-content: center;
  gap: 0.5rem;
  background-color: yellowgreen;
  color: white;
`;

const Search = ({ search, handleSearchChange, handleSearch }) => {
  return (
    <div>
      <input
        placeholder="이름을 검색하세요"
        value={search}
        type="text"
        onChange={handleSearchChange}
      />
      <button css={buttonStyle} onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default Search;
