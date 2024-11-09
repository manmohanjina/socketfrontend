
import "./App.css";


import Chat from "./component/chatApp/chat";

function App() {
  //const timeOut=useTimeout(2000)
  // const fn=()=>{
  //   console.log('API called with hello');

  // }
  // const debounce=useDebounce(2000,fn)

  // const myObj = {
  //   name: 'Manmohan',
  //   details: {
  //     age: 29,
  //     hobbies: ['coding', 'reading']
  //   },
  //   todos:[
  //     {
  //       "userId": 1,
  //       "id": 1,
  //       "title": "delectus aut autem",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 2,
  //       "title": "quis ut nam facilis et officia qui",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 3,
  //       "title": "fugiat veniam minus",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 4,
  //       "title": "et porro tempora",
  //       "completed": true
  //     },
  //     {
  //       "userId": 1,
  //       "id": 5,
  //       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 6,
  //       "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 7,
  //       "title": "illo expedita consequatur quia in",
  //       "completed": false
  //     },
  //     {
  //       "userId": 1,
  //       "id": 8,
  //       "title": "quo adipisci enim quam ut ab",
  //       "completed": true
  //     }]
  // };

  // const secretKey = 'mySecretKey';
  // const saltRounds = 16;

  // const hashedObj = hashObject(myObj, secretKey, saltRounds);
  // console.log('Hashed Object:', hashedObj);

  // console.log(timeOut);

  const url = "https://jsonplaceholder.typicode.com/todo";
  // const {data,status}=useFetchData(url)

  // console.log(status,data);

  //console.log(data,status,'check render');

  // console.log(data,loading,isError);
  // const [data, setData] = useState("");
  // const log = (val) => {
  //   return console.log(val);
  // };

  // const socket = useMemo(()=>{
  // return  io("http://localhost:3000");
  // },[])

  // useEffect(() => {
  //   socket.on("message", (val) => {
  //     log(val);
  //   });
  //   socket.on("join", (val) => {
  //     log(val);
      
  //   });
  //   socket.on('message-recived',(data)=>{
  //     log(data)
  //   })
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // const handleSubmit = (data) => {
  //   log(data,'this is data')
  //   socket.emit("message", data);
  //   socket.on('msg',(val)=>{
  //     log(val)
      
  //   })
  //   setData("");
  // };







  return (
    <div className="App">

      <Chat></Chat>


      {/* <div className="flex items-center justify-center h-screen bg-gray-100">
        {" "}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
          {" "}
          <h1 className="text-2xl font-bold mb-4">Send a Message</h1>{" "}
          <div className="flex items-center">
            {" "}
            <input
              onChange={(e) => setData(e.target.value)}
              value={data}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            <button
              onClick={()=>handleSubmit(data)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              {" "}
              Send{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div> */}
     

      {/* <UserInput></UserInput> */}

      {/* <CountComponent/> */}

      {/* <AssignGift></AssignGift> */}

      {/* <DigitalClock></DigitalClock> */}
      {/* <Todo/> */}

      {/* <TrainBooking></TrainBooking> */}

      {/* <Album/> */}

      {/* {
    status.isLoading?<h1>...loading</h1>:<div>


      {
        data.map((elm)=>{
          return<div key={elm.id} >
            <h1>
             { elm.title}
            </h1>
            <h1>{elm.status?"completed":"not-completed"}</h1>

          </div>
        })
      }
    </div>
  } */}

      {/* <button onClick={debounce}>Click me</button> */}
    </div>
  );
}

export default App;
