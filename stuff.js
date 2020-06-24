

fetch('https://cors-anywhere.herokuapp.com/https://twitterbackendd.herokuapp.com/saveBody', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: JSON.stringify({ id: 2, innerHTML: initial })
});