$("#snippet-list")
	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-6DA55F?style=flat&logo=Javascript&logoColor=white'></img>
		Get Current Location in Javascript Web`,
		`Function to get Current Location using Web API`,
		`
		function getLocation(fn){
			if (!navigator.geolocation) {
				alert("Geolocation Error!")
			} else {
				navigator.geolocation.getCurrentPosition(function (position) {
					let { latitude, longitude } = position.coords
					fn(latitude,longitude)
				});
			}
		}
		`,
		"https://gist.github.com/marcuwynu23/ec9db0a3daade5f939c68f7893704471"
	))

	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-6DA55F?style=flat&logo=Javascript&logoColor=white'></img>
		Javascript Source Code: Send Data to Server`,
		`
	
		Fetch API Client Side: Send Data to Server using URLSearchParams class
		
		
		`,
		`
		function sendDataToServer(url,data){
			fetch(url,{
			method: "post",
			body: new URLSearchParams(data)
			})
				.then(res=>res.text())
				.then(text=>console.log(text))
				.catch(err=>console.error(err))
		}
		
		`,
		"https://gist.github.com/marcuwynu23/a082824342fe9d170ea71a80240e02aa"
	))




	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-6DA55F?style=flat&logo=Javascript&logoColor=white'></img>
		Javascript Source Code: Send JSON Data to Server`,
		`
	
		Fetch API Client Side: Send Data to Server using URLSearchParams class
		
		
		`,
		`
		function sendJSONData(url,data){
			fetch(url,{
			method: "post",
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(data) 
		})
			.then(res=>res.text())
			.then(text=>console.log(text))
			.catch(err=>console.error(err))
		}
		`,
		"https://gist.github.com/marcuwynu23/ccc6db1e949b050e59a7e7c18026f057"
	))

	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-blue?style=flat&logo=Docker&logoColor=white'></img>
		Dockerfile for nodeJS Project`,
		`
		Dockerfile for nodeJS Project
		`,
		`
		# Dockerfile for nodeJS project
		FROM node:12-alpine3.14 
		WORKDIR /app 
		COPY package.json /app 
		RUN npm i && npm cache clean --force
		COPY . /app
		
		CMD node index.js 
		EXPOSE 9000
		
		# Use this when using docker in heroku 
		CMD node index.js -p $PORT

		`,
		"https://gist.github.com/marcuwynu23/a523b83bb63c531982124fa28554cdf5"
	))


	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-Java-red'></img>
		CHEAT CODE: ADD HIGHLIGHTER INTO TEXT COMPONENT`,
		`
		`,
		`
		var highlighter = textArea1.getHighlighter();
		var painter = new DefaultHighlighter.DefaultHighlightPainter(new Color(225,225,225,100));
		int p1 = 0,p2 = 0; 
		try{
				p1 = textArea1.getSelectionStart();
				p2 = textArea1.getSelectionEnd();
				highlighter.addHighlight(p1,p2,painter);
		}catch(BadLocationException ex){
			 System.out.println(ex);
		}
			

		`,
		"https://gist.github.com/marcuwynu23/a194bb3ac9f8d15d267080ab5752ffd8"
	))


	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-Java-red'></img>
		HOWTO'S: CREATE SERIALIZE OBJECT FILE IN JAVA`,
		`
		`,
		`
			import java.io.FileOutputStream;
			import java.io.FileInputStream;
			import java.io.ObjectOutputStream;
			import java.io.ObjectInputStream;
			import java.io.File;
			import java.io.IOException;
			import java.io.Serializable;

			public class Sample{
				public static void main(String[] args) throws IOException{
					createObjFile(new SerializeObject(),"test.obj");
					System.out.println(readObjFile("test.obj"));
				}

				public static void createObjFile(Object obj,String filePath) throws IOException{
					var foStream = new ObjectOutputStream(new FileOutputStream(new File(filePath)));
					foStream.writeObject(obj);
					foStream.close();
				}
				public static Object readObjFile(String filePath) throws IOException{
					var fiStream = new ObjectInputStream(new FileInputStream(new File(filePath)));
					try{
						Object obj = fiStream.readObject();
						return obj;
					}catch(ClassNotFoundException cnex){		
						System.out.println(cnex);
					}
					fiStream.close();
					return null;
				}

			}
			class SerializeObject implements Serializable{}
		`,
		"https://gist.github.com/marcuwynu23/b7b93e74a838b690ccfc49b88eefa1cf"
	))

	.append(createSnippet(
		`
		<img src='https://img.shields.io/badge/-Java-red'></img>
		OWTO'S: WRITE STRING TO TXT FILE IN JAVA`,
		`
		`,
		`
		import java.io.FileWriter;
		public class WriteStringToText{
			public static void main(String[] args){
				 var mywriter = new FileWriter(fileBackupPath);
				 mywriter.write("content");
				 mywriter.close();
			}
		}
		
		`,
		"https://gist.github.com/marcuwynu23/69f9cf84561c7381af3183df3ce144f0"
	))


	






