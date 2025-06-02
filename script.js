document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', function () {
    const likeCount = this.parentElement.querySelector('span')
    const currentLikes = parseInt(likeCount.textContent.match(/\d+/)[0])
    likeCount.textContent = `❤️ ${currentLikes + 1} Likes`

    // Force green color
    this.style.setProperty('background', '#4CAF50', 'important')

    setTimeout(() => {
      this.style.setProperty('background', '#ff4757', 'important')
    }, 300)
  })
})
