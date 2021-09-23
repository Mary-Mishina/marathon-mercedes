const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentsElems = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')
        tabsContentsElems.forEach(content => {
            (content.dataset.tabsField === btn.dataset.tabsHandler) ? content.classList.remove('hidden') : content.classList.add('hidden')
        })
    }) 
}


