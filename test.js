function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  changeValue(){
    props.user = comment[1].user;
  }
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
      <button type="button" onClick={changeValue}>Click Me!</button>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = [{
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
},{
   date: new Date(),
  text: 'I hope you enjoying learning React!',
  author: {
    name: 'Kitty Shown',
    avatarUrl: 'https://placekitten.com/g/64/65',
  }
}];
// ReactDOM.render(
//   <Comment
//     date={comment[0].date}
//     text={comment[0].text}
//     author={comment[0].author}
//   />,
//   document.getElementById('root')
// );

default export comment;