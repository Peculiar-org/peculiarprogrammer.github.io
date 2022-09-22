
function createProject(title, author, description, imgSrc, repo, docu, bin) {
	let div = document.createElement("div")
	div.classList = "my-5"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder display-6"
	h3.innerHTML = title


	let a = document.createElement("a")
	a.classList = "fw-lighter my-3 text-decoration-none"
	a.innerHTML = author.name
	a.href = author.link



	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder mt-2"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description

	div.append(document.createElement("hr"))
	div.append(h3)
	div.append(a)
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
	a1.classList = "text-white btn btn-sm btn-dark"
	a1.href = repo

	span.append(ig)
	span.append(a1)


	let ib = document.createElement("i")
	ib.classList = "bi bi-book mx-2"
	let a2 = document.createElement("a")
	a2.textContent = "Documentation"
	a2.classList = "text-white btn btn-sm btn-dark"
	a2.href = docu

	span.append(ib)
	span.append(a2)

	let ic = document.createElement("i")
	ic.classList = "bi bi-file-earmark-binary-fill mx-2"
	let a3 = document.createElement("a")
	a3.textContent = "Release"
	a3.classList = "text-white btn btn-sm btn-dark"
	a3.href = bin

	span.append(ic)
	span.append(a3)

	div.append(span)




	return div
}



function createTemplate(title, author, description, repo, docu) {
	let div = document.createElement("div")
	div.classList = "box my-5"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder display-6"
	h3.innerHTML = title


	let a = document.createElement("a")
	a.classList = "fw-lighter my-3 text-decoration-none"
	a.innerHTML = author.name
	a.href = author.link



	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder mt-2"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description

	div.append(document.createElement("hr"))
	div.append(h3)
	div.append(a)
	div.append(h6)
	div.append(p)

	let span = document.createElement('span')
	let ig = document.createElement("i")
	ig.classList = "bi bi-github mx-2"
	let a1 = document.createElement("a")
	a1.textContent = "Source"
	a1.classList = "text-white btn btn-sm btn-dark"
	a1.href = repo

	span.append(ig)
	span.append(a1)


	let ib = document.createElement("i")
	ib.classList = "bi bi-book mx-2"
	let a2 = document.createElement("a")
	a2.textContent = "Documentation"
	a2.classList = "text-white btn btn-sm btn-dark"
	a2.href = docu

	span.append(ib)
	span.append(a2)




	div.append(span)
	return div
}


function createContainer(title, author, description, repo) {
	let div = document.createElement("div")
	div.classList = "box  my-5"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder display-6"
	h3.innerHTML = title


	let a = document.createElement("a")
	a.classList = "fw-lighter my-3 text-decoration-none"
	a.innerHTML = author.name
	a.href = author.link


	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder mt-2"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description

	div.append(document.createElement("hr"))
	div.append(h3)
	div.append(a)
	div.append(h6)
	div.append(p)

	let span = document.createElement('span')
	let ig = document.createElement("i")
	ig.classList = "bi bi-box mx-2"
	let a1 = document.createElement("a")
	a1.textContent = "Source"
	a1.classList = "text-white btn btn-sm btn-dark"
	a1.href = repo

	span.append(ig)
	span.append(a1)


	div.append(span)
	return div
}





function createSnippet(title, author, description, content, gist) {
	let div = document.createElement("div")

	div.classList = "box  my-5"
	let h3 = document.createElement("h3")
	h3.classList = "fw-bolder sub-title"
	h3.innerHTML = title

	let a = document.createElement("a")
	a.classList = "fw-lighter my-3 text-decoration-none"
	a.innerHTML = author.name
	a.href = author.link


	let h6 = document.createElement("h6")
	h6.classList = "fw-bolder mt-2"
	h6.textContent = "Description"
	let p = document.createElement("p")
	p.innerHTML = description

	div.append(document.createElement("hr"))
	div.append(h3)
	div.append(a)
	div.append(h6)
	div.append(p)

	let divc = document.createElement('div')
	let pre = document.createElement("pre")
	let code = document.createElement('code')
	code.innerHTML = content
	divc.classList = "my-5  code-container "
	pre.append(code)



	let copyBtn = document.createElement('button')
	copyBtn.classList = "btn btn-dark btn-sm m-2"
	copyBtn.textContent = "Copy"
	copyBtn.onclick = function (e) {
		let text = e.currentTarget.nextElementSibling.firstChild.innerText
		navigator.clipboard.writeText(text).then(function () {
			console.log('Copying to clipboard was successful!');
		}, function (err) {
			console.error(err);
		});
	}



	let copyI = document.createElement("i");
	copyI.classList = "bi bi-clipboard mx-2"
	copyBtn.append(copyI)
	divc.append(copyBtn)
	divc.append(pre)
	div.append(divc)

	let span = document.createElement('span')
	let ig = document.createElement("i")
	ig.classList = "bi bi-github mx-2"
	let a1 = document.createElement("a")
	a1.textContent = "Github Gist"
	a1.classList = "text-white btn btn-sm btn-dark"
	a1.href = gist

	span.append(ig)
	span.append(a1)


	div.append(span)

	return div
}



function imagesContainer(container, imglist) {
	imglist.forEach(img => {
		let im = document.createElement('img')
		im.classList = "img mx-1 w-25 img-fluid img-box  img-responsive "
		im.src = img
		container.append(im)
	})
}


