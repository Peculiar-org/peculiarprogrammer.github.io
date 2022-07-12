
function createProject(title, description, imgSrc, repo, docu,bin) {
	let div = document.createElement("div")
	div.classList = "box"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder"
	h3.innerHTML = title
	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description
	div.append(h3)
div.append(document.createElement("hr"))
	div.append(h6)
	div.append(p)


	let divImg = document.createElement("div")
	imagesContainer(divImg, imgSrc)
	divImg.classList = "my-5"
	div.append(divImg)


	let span = document.createElement('span')
	let ig = document.createElement("i")
	ig.classList = "bi bi-github mx-2"
	let a1 = document.createElement("a")
	a1.textContent = "Source"
	a1.classList = "text-white"
	a1.href = repo

	span.append(ig)
	span.append(a1)


	let ib = document.createElement("i")
	ib.classList = "bi bi-book mx-2"
	let a2 = document.createElement("a")
	a2.textContent = "Documentation"
	a2.classList = "text-white"
	a2.href = docu

	span.append(ib)
	span.append(a2)

	let ic = document.createElement("i")
	ic.classList = "bi bi-file-earmark-binary-fill mx-2"
	let a3 = document.createElement("a")
	a3.textContent = "Release"
	a3.classList = "text-white"
	a3.href = bin

	span.append(ic)
	span.append(a3)


	
	div.append(span)

	



	return div
}



function createTemplate(title, description, repo, docu) {
	let div = document.createElement("div")
	div.classList = "box"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder"
	h3.innerHTML = title
	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description
	div.append(h3)
	div.append(document.createElement("hr"))

	div.append(h6)
	div.append(p)

	let span = document.createElement('span')
	let ig = document.createElement("i")
	ig.classList = "bi bi-github mx-2"
	let a1 = document.createElement("a")
	a1.textContent = "Source"
	a1.classList = "text-white"
	a1.href = repo

	span.append(ig)
	span.append(a1)


	let ib = document.createElement("i")
	ib.classList = "bi bi-book mx-2"
	let a2 = document.createElement("a")
	a2.textContent = "Documentation"
	a2.classList = "text-white"
	a2.href = docu

	span.append(ib)
	span.append(a2)

	

	
	div.append(span)
	return div
}



function createSnippet(title, description, content, gist) {
	let div = document.createElement("div")

	div.classList = "box"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder"
	h3.innerHTML = title
	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description
	div.append(h3)
	div.append(document.createElement("hr"))

	div.append(h6)
	div.append(p)

	let divc = document.createElement('div')
	let pre = document.createElement("pre")
	let code = document.createElement('code')
	code.innerHTML = codeBeautifier(content)
	divc.classList = "my-5 code-container"
	pre.append(code)
	divc.append(pre)
	div.append(divc)

	let span = document.createElement('span')
	let ig = document.createElement("i")
	ig.classList = "bi bi-github mx-2"
	let a1 = document.createElement("a")
	a1.textContent = "Github Documentation"
	a1.classList = "text-white"
	a1.href = gist

	span.append(ig)
	span.append(a1)


	div.append(span)

	return div
}



function imagesContainer(container, imglist) {
	imglist.forEach(img => {
		let im = document.createElement('img')
		im.classList = "img mx-1"
		im.src = img
		container.append(im)
	})
}

function codeBeautifier(str){
	console.log(str);
	return str.replace('\n','<br>')
}

