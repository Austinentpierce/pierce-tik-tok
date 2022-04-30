import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/c3d508ad8bc102306002ebda826ef3da/6265fadb/video/tos/useast5/tos-useast5-ve-0068c001-tx/a7f1dd7def484edf8c41bfdc6093b3fd/?a=1988&br=1612&bt=806&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZAFS4we2NaE~fl7Gb&l=20220424193514010113006195004063B0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajtuNjk6ZnIzPDMzZzczNEApOmVoNzM3O2Q1N2ZpNjY0ZGdyaTU1cjRnZmZgLS1kMS9zc2NgNV8uYF9hNi9gLS9eMzQ6Yw%3D%3D&vl=&vr="
          channel="espn"
          description="Wow this works"
          song="Wanna be a baller - Lil' Troy"
          likes={333}
          messages={222}
          shares={111}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/e0fb85f691d9a05391fa99667d136403/6265fae2/video/tos/useast5/tos-useast5-ve-0068c004-tx/cb5df25676de4e1297f1f8fdec1fb8e0/?a=1988&br=2208&bt=1104&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZAFS4we2NaE~fl7Gb&l=20220424193514010113006195004063B0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdzPDk6ZnZ3OzMzZzczNEApNmg2Njo1NTxpNzVkOjs7O2czaV5hcjQwbWtgLS1kMS9zcy5hYWJjLzE1MDE1MjMxYzE6Yw%3D%3D&vl=&vr="
          channel="geb_carla1"
          description="This is insane!"
          song="Dreams - Fleetwood Mac"
          likes={747}
          messages={221}
          shares={56}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/b8d466dec1844d0ce4ccde795bea0ca9/6265fadf/video/tos/useast5/tos-useast5-pve-0068-tx/696234d78df34cfb81f6da420362c43e/?a=1988&br=3806&bt=1903&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZAFS4we2NaE~fl7Gb&l=20220424193514010113006195004063B0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3dxOzg6ZndsPDMzZzczNEApNDtmN2Y1NTs7N2U5aTpoZmdyZGtlcjRncGVgLS1kMS9zczJhL2MuX2JeLjI2MzVhLy46Yw%3D%3D&vl=&vr="
          channel="houseofhighlights"
          description="Man this is wild!"
          song="Chop Suey! - System Of A Down"
          likes={665}
          messages={179}
          shares={42}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/17fcdb2013f1a958f921a3fbe1c743d3/6265fada/video/tos/useast2a/tos-useast2a-pve-0068/c3df15dcd8e0409db43cc566d02f87d1/?a=1988&br=1646&bt=823&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZAFS4we2NaE~fl7Gb&l=20220424193514010113006195004063B0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQ2dGY6Zjc8PDMzNzczM0ApaDQ3ZTRmZTw7NzxoPDs6aWdhaGZscjQwc2VgLS1kMTZzczQ2MGE0NDI1MWI0YTNhMGA6Yw%3D%3D&vl=&vr="
          channel="pongfinity"
          description="Never let them know your next move!"
          song="Pimpin' Ain't Eazy - Kodak Black"
          likes={907}
          messages={871}
          shares={306}
        />
        <Video
          url="https://v16m-webapp.tiktokcdn-us.com/3619504ce08ed8f6a58f7e59927868a6/6265fae0/video/tos/useast5/tos-useast5-ve-0068c003-tx/2fdfe06712ec46c3989e6e1f6cb844ae/?a=1988&br=2912&bt=1456&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=ebtHKH-qMyq8ZAFS4we2NaE~fl7Gb&l=20220424193514010113006195004063B0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajQ3Ozw6ZjtrPDMzZzczNEApOmZlOzNkZGRoN2U8ZmU8OWdqYGxjcjRvNmFgLS1kMS9zcy40Yy9eYi40Y180XmA0X186Yw%3D%3D&vl=&vr="
          channel="chrisvanssis"
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
