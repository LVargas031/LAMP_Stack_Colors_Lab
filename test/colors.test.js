/**
 * @jest-environment jsdom
 */

// Import functions and the new setter from code.js
const { saveCookie, addColor, setUserData } = require('../public/js/code.js');

describe('COLORS Application Test Suite', () => {

    test('saveCookie should correctly update document.cookie with user data', () => {
        // Use the setter to update the internal variables of code.js
        setUserData(55, "John", "Doe");

        saveCookie();

        expect(document.cookie).toContain("firstName=John");
        expect(document.cookie).toContain("lastName=Doe");
        expect(document.cookie).toContain("userId=55");
    });

    test('addColor should read the DOM and send the expected JSON payload to the API', () => {
        document.body.innerHTML = `
            <input id="colorText" value="Emerald" />
            <div id="colorAddResult"></div>
        `;

        const xhrMock = {
            open: jest.fn(),
            setRequestHeader: jest.fn(),
            send: jest.fn(),
            onreadystatechange: null
        };
        window.XMLHttpRequest = jest.fn(() => xhrMock);

        // Update the internal userId before running addColor
        setUserData(55, "John", "Doe");

        addColor();

        const expectedPayload = JSON.stringify({ color: "Emerald", userId: 55 });
        expect(xhrMock.send).toHaveBeenCalledWith(expectedPayload);
    });
});