import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/d57dd80f1664d2e7fbeead68efa04807/628099d7/video/tos/useast2a/tos-useast2a-pve-0037-aiso/f17c9757449f4e4f9765b59f2fa565b3/?a=1988&br=3728&bt=1864&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8Z9Xdlwe2N9.yfl7Gb&l=20220515000941010002006005005006003006086A0060&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3N1ZzY6ZnN0PDMzZjgzM0ApOGY0O2Y7N2VnNzk1PGc4aGduNDRscjRfbWdgLS1kL2Nzc2FhMzY1YTYyYTUzMzVjLzM6Yw%3D%3D&vl=&vr="
          channel="ianboggs"
          description="Wow this works"
          song="Wanna be a baller - Lil' Troy"
          likes={333}
          messages={222}
          shares={111}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/7c845f18943e8df82f105a2851617104/62809984/video/tos/useast5/tos-useast5-pve-0068-tx/675c4ae87e734afab90e23ff9caa98ca/?a=1988&br=4362&bt=2181&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8Z9Xdlwe2N9.yfl7Gb&l=20220515000941010002006005005006003006086A0060&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajtkbjo6ZjV2PDMzZzczNEApODlnaGY4NTszN2U3NGk1NmctaWZscjQwYnJgLS1kMS9zczNjNWNgMl4zMWFgYS82M186Yw%3D%3D&vl=&vr="
          channel="dobretwins"
          description="This is insane!"
          song="Dreams - Fleetwood Mac"
          likes={747}
          messages={221}
          shares={56}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/467a3cb78b10070118c78e879a739fa4/6280996d/video/tos/useast5/tos-useast5-ve-0068c001-tx/7fba04e471034c978319906a0f1d968d/?a=1988&br=4324&bt=2162&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8Z9Xdlwe2N9.yfl7Gb&l=20220515000941010002006005005006003006086A0060&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzw7OTw6ZmdlPDMzZzczNEApZmU7aTZpNGU2NzU6NjtpZ2dpam5kcjRvYnNgLS1kMS9zczIuYjIzNC00L18uYWEzLzY6Yw%3D%3D&vl=&vr="
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
