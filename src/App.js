import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/28d529c6020b56afcf7de67eb69356a7/627747f5/video/tos/useast5/tos-useast5-pve-0068-tx/99d7b384c0224c85b10addb25221fca9/?a=1988&br=3430&bt=1715&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZrIzmwe2NtiGfl7Gb&l=202205072231400100020060050050060030100D851AED&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3NpZ2Q6Zm92PDMzZzczNEApNGU7NzxkaWRmNztlPGk3ZWdtZ2gxcjRvL25gLS1kMS9zcy5gYzUwYjE2NF4zYDRiNDA6Yw%3D%3D&vl=&vr="
          channel="ianboggs"
          description="Wow this works"
          song="Wanna be a baller - Lil' Troy"
          likes={333}
          messages={222}
          shares={111}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/7f64185a69c4c3b25e55f54ac7232e41/62774878/video/tos/useast5/tos-useast5-ve-0068c001-tx/c1a47cfe713b4b74ae59409c5bb0d2d9/?a=1988&br=7138&bt=3569&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8Ze0zmwe2NeSRfl7Gb&l=2022050722325601000400500600301305846F3D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M292bjc6Zm5mPDMzZzczNEApZjY7NGk2ZDw1Nzg5NjU0ZWdzLjYvcjRvXm1gLS1kMS9zczYyYTYzXmMvLjUxMzBiYi46Yw%3D%3D&vl=&vr="
          channel="dobretwins"
          description="This is insane!"
          song="Dreams - Fleetwood Mac"
          likes={747}
          messages={221}
          shares={56}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/abfb7655c56abe21dea810948fa133f9/62774976/video/tos/useast2a/tos-useast2a-pve-0068/1e9a0aaaacdc4fd3b6c79bc4ed015c52/?a=1988&br=7634&bt=3817&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZzXzmwe2NjkRfl7Gb&l=20220507223812010002006005005006003012128508AD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M293eTg6Zjw3PDMzNzczM0ApNDtkOmY6OTxmNzNnaGllOmcuaWducjRnZ2ZgLS1kMTZzczVhYWEyMTEzYS9hYC80NjM6Yw%3D%3D&vl=&vr="
          channel="crystalclearpools"
          description="Man this is wild!"
          song="Just a Cloud Away - Pharrell Williams"
          likes={665}
          messages={179}
          shares={42}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/9d37ea76e217167e796a0706ac3fcef7/627749af/video/tos/useast5/tos-useast5-ve-0068c001-tx/00e1e0cdaff649a5ae23420a4657f1e6/?a=1988&br=4756&bt=2378&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZzXzmwe2NjkRfl7Gb&l=20220507223812010002006005005006003012128508AD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M25kc2g6ZmlpPDMzZzczNEApaGRlOTQ0OGQ1NzhoNjQ6OWdrMjNwcjQwNG1gLS1kMS9zczJfMi1gYy5eLTE0MTU1LzM6Yw%3D%3D&vl=&vr="
          channel="overkillcomputers"
          description="Fish Tank PC"
          song="Pimpin' Ain't Eazy - Kodak Black"
          likes={907}
          messages={871}
          shares={306}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/de73f78eed48107d7cf760f941f64dea/62774c43/video/tos/useast2a/tos-useast2a-ve-0068c002/00e460328c314503928d42d46fdc7293/?a=1988&br=3572&bt=1786&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZbNzmwe2NdTRfl7Gb&l=20220507224825010002003002005006003005138A4548&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M29xZTQ6ZnI5PDMzNzczM0ApNTk1ZTc2ZmRlNzozZ2VlOGdob3FycjRnaV5gLS1kMTZzcy4uMDI1Mi1gYi0wMS8wLTA6Yw%3D%3D&vl=&vr="
          channel="ornelas_anyel"
          description="Nothing to see here just a cat on a bike"
          song="Trip - Ella Mai"
          likes={879}
          messages={439}
          shares={89}
        />
      </div>
    </div>
  );
}

export default App;
