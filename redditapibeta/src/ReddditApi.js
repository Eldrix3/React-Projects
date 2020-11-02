
export default {
    search: function(searchTerm) {
      return fetch("http://www.reddit.com/search.json?q="+searchTerm+'&raw_json=1'+'&sort=new'+'&limit=100'+'&include_over_18=on')
        .then(res => res.json())
        .then(data => data.data.children.map(data => data.data))
        .catch(err => console.log("ERROR"));
    }
}