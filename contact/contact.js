
// fromarea

document.addEventListener('DOMContentLoaded', function () {
  let targets = document.querySelector('.furigana');
  targets.oninput = function () {
    let alerttext = document.querySelector('.alerttext');
    if ((targets.value != '') && (targets.value.match(/[^ァ-ヶーｦ-ﾟ\s]/))) {
      alerttext.textContent = "「カタカナ」のみで入力して下さい。";
    }
    else {
      alerttext.textContent = "";
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let mailbox = document.querySelector('.mailbox');
  mailbox.oninput = function () {
    let alertmail = document.querySelector('.alertmail');
    if ((mailbox.value != '') && (mailbox.value.match(/[^a-zA-Z0-9_@.]/))) {
      alertmail.textContent = '入力には、英数字と記号「_!#$%&」だけが使えます。';
    }
    else {
      alertmail.textContent = "";
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  let messagebox = document.querySelector('.messagebox');
  messagebox.oninput = function () {
    let alertmessage = document.querySelector('.alertmessage');
    if (messagebox.value.length < 2 && messagebox.value.length > 0) {
      alertmessage.textContent = "入力文字数が少なすぎます。2文字以上を入力して下さい。";
    }
    else {
      alertmessage.textContent = "";
    }
  }
});