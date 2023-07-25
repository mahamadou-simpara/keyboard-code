const container = document.getElementById('container')

window.addEventListener("keydown", (e) => {
    container.innerHTML =
  `
    <div class="square">
    <small>event.key</small>
    ${e.key === " " ? 'Space' : e.key}
</div>
<div class="square">
    <small>event.keyCode</small>
    ${e.keyCode}
</div>
<div class="square">
    <small>event.code</small>
    ${e.code}
</div>
    `;
});
