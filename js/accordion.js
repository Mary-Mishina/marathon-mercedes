const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

// homework-01
// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btns.forEach((btnItem) => {
//             btnItem.classList.remove('feature__link_active')
//         })
//         btnItem.classList.add('feature__link_active')
//         lists.forEach( (listItem) => {
//             listItem.classList.add('hidden')
//         })
//         lists[index].classList.remove('hidden')
//     })
// })

// homework-02
const filter = (obj, cb) => [].filter.call(obj, cb)

btns.forEach((btnItem, index) => {
    console.log(this);
    btnItem.addEventListener('click', () => {
        filter(btns, btn => !btn.isEqualNode(btnItem)).forEach((btnItem) => {
            btnItem.classList.remove('feature__link_active')
        })
        btnItem.classList.toggle('feature__link_active')

        filter(lists, list => !list.isEqualNode(lists[index])).forEach((listItem) => {
            listItem.classList.add('hidden')
        })
        lists[index].classList.toggle('hidden')
    })
})