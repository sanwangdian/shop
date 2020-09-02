<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
	var token = "";
	axios.post('http://www.xiaozai.tech:1024/emall/login',
	{
			username:"jet",
			password:"123456"
	})
	  .then(function (response) {
		token ="Bearer "+response.data.data.token;
	  })
	  .catch(function (error) {
		console.log(error);
	  });
</script>