$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function(data) {
      let Info = data.results.map(a => { return { name: a.name.title + " " + a.name.first + " " + a.name.last + " ", email: a.email}} )
      console.log(Info)
    }
  });
        

