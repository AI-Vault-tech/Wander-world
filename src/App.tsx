import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import BeautifulPlaces from './components/BeautifulPlaces'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './App.css'
// Beautiful Places components
import VastExpanses from './components/VastExpanses'
import MinuteMarvels from './components/MinuteMarvels'
import AzureWorlds from './components/AzureWorlds'
import FrozenRealms from './components/FrozenRealms'
import VolcanicLands from './components/VolcanicLands'
import LightShadow from './components/LightShadow'
import HiddenRealms from './components/HiddenRealms'
import AncientStones from './components/AncientStones'
import LivingLandscapes from './components/LivingLandscapes'
import EphemeralBeauty from './components/EphemeralBeauty'
import CultivatedBeauty from './components/CultivatedBeauty'
import IsolatedSanctuaries from './components/IsolatedSanctuaries'
import CoastalDreams from './components/CoastalDreams'
// New Beautiful Places components
import Waterfalls from './components/Waterfalls'
import Deserts from './components/Deserts'
// Creatures components
import Creatures from './components/Creatures'
import MajesticBeasts from './components/MajesticBeasts'
import TinyMarvels from './components/TinyMarvels'
import AerialWonders from './components/AerialWonders'
import AquaticLife from './components/AquaticLife'
import ColorfulBeings from './components/ColorfulBeings'
import AncientSpecies from './components/AncientSpecies'
// New creature components
import DesertSurvivors from './components/DesertSurvivors'
import ArcticAdventurers from './components/ArcticAdventurers'
import JungleGiants from './components/JungleGiants'
import NightHunters from './components/NightHunters'
import DeepSeaMysteries from './components/DeepSeaMysteries'
import CamouflageMasters from './components/CamouflageMasters'
// Creature Profiles
import CreatureProfiles from './components/CreatureProfiles'
import AmurLeopard from './components/AmurLeopard'
import JavanRhinoceros from './components/JavanRhinoceros'
import Vaquita from './components/Vaquita'
import CrossRiverGorilla from './components/CrossRiverGorilla'
import HawksbillTurtle from './components/HawksbillTurtle'
import Saola from './components/Saola'
import SumatranOrangutan from './components/SumatranOrangutan'
import MountainGorilla from './components/MountainGorilla'
import SnowLeopard from './components/SnowLeopard'
import Pangolin from './components/Pangolin'
import Axolotl from './components/Axolotl'
import Kakapo from './components/Kakapo'
import RedPanda from './components/RedPanda'
import IberianLynx from './components/IberianLynx'
import BlackFootedFerret from './components/BlackFootedFerret'
import BiodiversityGlobe from './components/BiodiversityGlobe'
// Human Marvels components
import HumanMarvels from './components/HumanMarvels'
import ArchitecturalWonders from './components/ArchitecturalWonders'
import ArtisticTreasures from './components/ArtisticTreasures'
import CulturalTraditions from './components/CulturalTraditions'
import EngineeringFeats from './components/EngineeringFeats'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/beautiful-places" element={<BeautifulPlaces />} />
            <Route path="/vast-expanses" element={<VastExpanses />} />
            <Route path="/minute-marvels" element={<MinuteMarvels />} />
            <Route path="/azure-worlds" element={<AzureWorlds />} />
            <Route path="/frozen-realms" element={<FrozenRealms />} />
            <Route path="/volcanic-lands" element={<VolcanicLands />} />
            <Route path="/light-shadow" element={<LightShadow />} />
            <Route path="/hidden-realms" element={<HiddenRealms />} />
            <Route path="/ancient-stones" element={<AncientStones />} />
            <Route path="/living-landscapes" element={<LivingLandscapes />} />
            <Route path="/ephemeral-beauty" element={<EphemeralBeauty />} />
            <Route path="/cultivated-beauty" element={<CultivatedBeauty />} />
            <Route path="/isolated-sanctuaries" element={<IsolatedSanctuaries />} />
            <Route path="/coastal-dreams" element={<CoastalDreams />} />
            {/* New Beautiful Places routes */}
            <Route path="/waterfalls" element={<Waterfalls />} />
            <Route path="/deserts" element={<Deserts />} />
            <Route path="/creatures" element={<Creatures />} />
            <Route path="/creatures/majestic-beasts" element={<MajesticBeasts />} />
            <Route path="/creatures/tiny-marvels" element={<TinyMarvels />} />
            <Route path="/creatures/aerial-wonders" element={<AerialWonders />} />
            <Route path="/creatures/aquatic-life" element={<AquaticLife />} />
            <Route path="/creatures/colorful-beings" element={<ColorfulBeings />} />
            <Route path="/creatures/ancient-species" element={<AncientSpecies />} />
            {/* New creature routes */}
            <Route path="/creatures/desert-survivors" element={<DesertSurvivors />} />
            <Route path="/creatures/arctic-adventurers" element={<ArcticAdventurers />} />
            <Route path="/creatures/jungle-giants" element={<JungleGiants />} />
            <Route path="/creatures/night-hunters" element={<NightHunters />} />
            <Route path="/creatures/deep-sea-mysteries" element={<DeepSeaMysteries />} />
            <Route path="/creatures/camouflage-masters" element={<CamouflageMasters />} />
            {/* Creature Profiles */}
            <Route path="/creature-profiles" element={<CreatureProfiles />} />
            <Route path="/creature-profile/amur-leopard" element={<AmurLeopard />} />
            <Route path="/creature-profile/javan-rhinoceros" element={<JavanRhinoceros />} />
            <Route path="/creature-profile/vaquita" element={<Vaquita />} />
            <Route path="/creature-profile/cross-river-gorilla" element={<CrossRiverGorilla />} />
            <Route path="/creature-profile/hawksbill-turtle" element={<HawksbillTurtle />} />
            <Route path="/creature-profile/saola" element={<Saola />} />
            <Route path="/creature-profile/sumatran-orangutan" element={<SumatranOrangutan />} />
            <Route path="/creature-profile/mountain-gorilla" element={<MountainGorilla />} />
            <Route path="/creature-profile/snow-leopard" element={<SnowLeopard />} />
            <Route path="/creature-profile/pangolin" element={<Pangolin />} />
            <Route path="/creature-profile/axolotl" element={<Axolotl />} />
            <Route path="/creature-profile/kakapo" element={<Kakapo />} />
            <Route path="/creature-profile/red-panda" element={<RedPanda />} />
            <Route path="/creature-profile/iberian-lynx" element={<IberianLynx />} />
            <Route path="/creature-profile/black-footed-ferret" element={<BlackFootedFerret />} />
            <Route path="/biodiversity-globe" element={<BiodiversityGlobe />} />
            {/* Human Marvels */}
            <Route path="/human-marvels" element={<HumanMarvels />} />
            <Route path="/human-marvels/architecture" element={<ArchitecturalWonders />} />
            <Route path="/human-marvels/art" element={<ArtisticTreasures />} />
            <Route path="/human-marvels/culture" element={<CulturalTraditions />} />
            <Route path="/human-marvels/engineering" element={<EngineeringFeats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  )
}

export default App