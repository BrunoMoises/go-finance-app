import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }
    body {
        background-color: ${(props) => props.theme.colors.black2};
        color: ${(props) => props.theme.colors.white};
    }

    button {
        background-color: ${(props) => props.theme.colors.primary};
        padding: 16px;
        border-radius: 8px;
        font-size: 25px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.white};
        cursor: pointer;
        transition: all 1;

        &:hover {
            background-color: ${(props) => props.theme.colors.secondary};
        }
    }

    input, select {
        background-color: ${(props) => props.theme.colors.black3};
        color: ${(props) => props.theme.colors.white};
        border: none;
        min-height: 27px;
        border-radius: 4px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 8px;
        padding-bottom: 8px;
        ::-webkit-input-placeholder {
            color: #4b4747;
            font-weight: 500;
            font-size: 12px;
        }

        &:focus {
            outline: none;
        }
    }

    input[type="date"] {
        ::-webkit-calendar-picker-indicator {
            background-image: url(/calendar.png);
            cursor: pointer;
        }
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 150px;
        background-image: 
            linear-gradient(45deg, transparent 50%, #FF7A00 50%), 
            linear-gradient(135deg, #FF7A00 50%, transparent 50%);
        background-position: 
            calc(100% - 20px) calc(1em + 2px),
            calc(100% - 15px) calc(1em + 2px),
            calc(100% - .5em) .5em;
        background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
        background-repeat: no-repeat;
        select::-ms-expand {
            display: none;
        }
    }
`;