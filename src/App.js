import { HomeLayout } from "./layout/HomeLayout";
import { MemberLogin } from "./page/memberLogin/MemberLogin";
import { MainLayout } from "./layout/MainLayout";
import { Top100Page } from "./page/main/Top100Page";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MyPlayList } from "./page/main/MyPlayList";
import SongRequest from "./page/main/SongRequest";
import LoginProvider from "./component/LoginProvider";
import SongPage from "./page/song/SongPage";
import { SearchPage } from "./page/main/SearchPage";
import { Suggestion } from "./page/main/Suggestion";
import ChartPage from "./page/main/ChartPage";
import MemberInfo from "./page/memberLogin/MemberInfo";
import MemberDelete from "./page/memberLogin/MemberDelete";
import MyFavoritePlaylist from "./page/main/MyFavoritePlaylist";
import SongList from "./page/song/SongList";
import { SongEdit } from "./page/song/SongEdit";
import SongInMyFavoritePlaylist from "./page/main/SongInMyFavoritePlaylist";
import MySongRequest from "./page/main/MySongRequest";
import RecommendPlaylist from "./page/main/RecommendPlaylist";
import TopPlaylist from "./page/main/TopPlaylist";
import KakaoLogin from "./page/memberLogin/KakaoLogin";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route path="login" element={<MemberLogin />} />
        <Route path="kakaoLogin" element={<KakaoLogin />} />,
      </Route>
      <Route path="main" element={<MainLayout />}>
        <Route index element={<Top100Page />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="myplaylist" element={<MyPlayList />} />
        <Route path="requestlist" element={<SongRequest />} />
        <Route path="mySongRequestList" element={<MySongRequest />} />
        <Route path="albumList" element={<SongList />} />
        <Route path="song/:id" element={<SongPage />} />
        <Route path="songEdit/:id" element={<SongEdit />} />
        <Route path="suggestion" element={<Suggestion />} />
        <Route path="chartpage" element={<ChartPage />} />
        <Route path="memberinfo" element={<MemberInfo />} />
        <Route path="delete" element={<MemberDelete />} />
        <Route path="myFavorite" element={<MyFavoritePlaylist />} />
        <Route path="recommendplaylist" element={<RecommendPlaylist />} />
        <Route
          path="songinmyfavoriteplaylist"
          element={<SongInMyFavoritePlaylist />}
        />
        <Route path="topplaylist" element={<TopPlaylist />} />
      </Route>
    </Route>,
  ),
);

function App(props) {
  return (
    <LoginProvider>
      <RouterProvider router={routes} />
    </LoginProvider>
  );
}

export default App;
