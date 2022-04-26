function remove(item , id){
    let parent = item.parentElement.parentElement.parentElement
    parent.remove()
    localStorage.removeItem(`product_${id}`)
    localStorage.removeItem(`product_cart_${id}`)
}
