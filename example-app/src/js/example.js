import { Test } from '@respaldokr4ken/plugin-test';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Test.echo({ value: inputValue })
}
