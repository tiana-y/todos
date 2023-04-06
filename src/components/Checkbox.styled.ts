import styled from "styled-components/macro";

export const CheckboxWrapper = styled.div`
  display: inline;
  .label {
    display: block;

    span {
      position:absolute;
      margin-top: 5px;
    }
  }
  .checkbox {
    position:relative;
    display:inline-block;
    width:90%;
    height:60px;
    overflow:hidden;
  }
  .checkbox-input {
    width:50px;
    height:50px;
    position:absolute;
    opacity:0;
  }
  .checkbox-input:checked + label svg g path {
    stroke-dashoffset:0;
  }
  .path1{
    stroke-dasharray:200;
    stroke-dashoffset:200;
    transition:.5s all;
  }
`;
export const TextWrapper = styled.span<{ $done: boolean }>`
  text-decoration: ${props => props.$done ? 'line-through 1px' : 'none' };
`;

// export const CheckboxWrapper = styled.div`
//   .container {
//     display: block;
//     position: relative;
//     padding-left: 35px;
//     margin-bottom: 12px;
//     cursor: pointer;
//     font-size: 22px;
//     -webkit-user-select: none;
//     -moz-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
//   }
//   .container input {
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;
//   }
//   .checkmark {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 25px;
//     width: 25px;
//     background-color: #eee;
//   }
//   .container:hover input ~ .checkmark {
//     background-color: #ccc;
//   }
//   .container input:checked ~ .checkmark {
//     background-color: #2196F3;
//   }
//   .checkmark:after {
//     content: "";
//     position: absolute;
//     display: none;
//   }
//   .container input:checked ~ .checkmark:after {
//     display: block;
//   }
//   .container .checkmark:after {
//     left: 9px;
//     top: 5px;
//     width: 5px;
//     height: 10px;
//     border: solid white;
//     border-width: 0 3px 3px 0;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
//   }
// `;
