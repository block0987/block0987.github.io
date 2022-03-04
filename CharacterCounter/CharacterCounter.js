window.onload = function () {
    document.getElementById("textarea").focus();
}

function copy() {
    var text = document.getElementById("textarea").value;
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    document.getElementById("textarea").focus();
}

function convertLower() {
    var str = document.getElementById("textarea").value;
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        newStr += str[i].toLowerCase();
    }

    document.getElementById("textarea").value = newStr;
    countCharacters(newStr);
    document.getElementById("textarea").focus();
}

function convertUpper() {
    var str = document.getElementById("textarea").value;
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        newStr += str[i].toUpperCase();
    }

    document.getElementById("textarea").value = newStr;
    countCharacters(newStr);
    document.getElementById("textarea").focus();
}

function deleteSpace() {
    var str = document.getElementById("textarea").value;
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] != " " && str[i] != "　") {
            newStr += str[i];
        }
    }

    document.getElementById("textarea").value = newStr;
    countCharacters(newStr);
    document.getElementById("textarea").focus();
}

function deleteLine() {
    var str = document.getElementById("textarea").value;
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] != "\n") {
            newStr += str[i];
        }
    }

    document.getElementById("textarea").value = newStr;
    countCharacters(newStr);
    document.getElementById("textarea").focus();
}

function reset() {
    document.getElementById("textarea").value = "";
    countCharacters("");
    document.getElementById("textarea").focus();
}

function countCharacters(str) {
    var count = str.length;
    var countSpaces = 0;
    var countLines = 0;
    var countSpaces = 0;

    // Count lines
    for (var i = 0; i < count; i++) {
        if (str[i] == "\n") {
            countLines++;
        }
        else if (str[i] == " " || str[i] == "　") {
            countSpaces++;
        }
    }

    var countNoSpaces = count - countSpaces - countLines;

    document.getElementById("CharCount").innerHTML = "文字数: " + count;
    document.getElementById("NoSpaceCount").innerHTML = "文字数(空白を除く): " +countNoSpaces;
    document.getElementById("SpaceCount").innerHTML = "スペース: " + countSpaces;
    document.getElementById("LineCount").innerHTML = "改行: " + countLines;
}