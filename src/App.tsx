import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import BeautifulPlaces from './components/BeautifulPlaces'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './App.css';
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
import TallestPlaces from './components/TallestPlaces'
import DeepestPlaces from './components/DeepestPlaces'
import NaturalWonders from './components/NaturalWonders'
import FuturisticCities from './components/FuturisticCities'
import Forests from './components/Forests'
import Caves from './components/Caves'
import Glaciers from './components/Glaciers'
import Serendipity from './components/Serendipity'
import BeautifulCities from './components/BeautifulCities'
import BeautifulParks from './components/BeautifulParks'
import Islands from './components/Islands'
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
import DesertSurvivors from './components/DesertSurvivors'
import ArcticAdventurers from './components/ArcticAdventurers'
import JungleGiants from './components/JungleGiants'
import NightHunters from './components/NightHunters'
import ColorfulDisplayers from './components/ColorfulDisplayers'
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
// Scientific Wonders components
import ScientificWonders from './components/ScientificWonders'
import Astronomy from './components/Astronomy'
import Biology from './components/Biology'
import Physics from './components/Physics'
import EarthSciences from './components/EarthSciences'
import Technology from './components/Technology'
import Medicine from './components/Medicine'
import Mathematics from './components/Mathematics'
import EnvironmentalScience from './components/EnvironmentalScience'
import ComputerScience from './components/ComputerScience'
import Neuroscience from './components/Neuroscience'
import MaterialsScience from './components/MaterialsScience'
import QuantumPhysics from './components/QuantumPhysics'
import Biotechnology from './components/Biotechnology'
import Oceanography from './components/Oceanography'
import RenewableEnergy from './components/RenewableEnergy'
// AdSense Compliance components
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import AboutUs from './components/AboutUs'
// Birds World components
import BirdsWorld from './components/BirdsWorld'
import FlightMasters from './components/FlightMasters'
import OceanNavigators from './components/OceanNavigators'
import ForestSingers from './components/ForestSingers'
import WetlandWonders from './components/WetlandWonders'
import MountainSoarers from './components/MountainSoarers'
import UrbanAdapters from './components/UrbanAdapters'
import MigratoryMarvels from './components/MigratoryMarvels'
import AquaticSpecialists from './components/AquaticSpecialists'
import IslandEndemics from './components/IslandEndemics'
import ToolUsers from './components/ToolUsers'
import VocalVirtuosos from './components/VocalVirtuosos'
import CooperativeBreeders from './components/CooperativeBreeders'
import ExtremeSurvivors from './components/ExtremeSurvivors'
import ShapeShifters from './components/ShapeShifters'
import FlightlessWonders from './components/FlightlessWonders'
import AquaticMasters from './components/AquaticMasters'
import ForestArchitects from './components/ForestArchitects'
import SkyDancers from './components/SkyDancers'
import JungleAcrobats from './components/JungleAcrobats'
import IceSculptors from './components/IceSculptors'
import DesertEngineers from './components/DesertEngineers'
import CoralGardeners from './components/CoralGardeners'
import HighlandSentinels from './components/HighlandSentinels'
import NightWhisperers from './components/NightWhisperers'
import MudArchitects from './components/MudArchitects'
import SeedGuardians from './components/SeedGuardians'
import HoneyHunters from './components/HoneyHunters'
import ShadowStalkers from './components/ShadowStalkers'
import SoundSculptors from './components/SoundSculptors'
// New Bird Categories
import FeatheredArchitects from './components/FeatheredArchitects'
import MastersOfCamouflage from './components/MastersOfCamouflage'
import HighFlyers from './components/HighFlyers'
import SeedSpecialists from './components/SeedSpecialists'
import NightOwls from './components/NightOwls'
import IceSpecialists from './components/IceSpecialists'
import DesertDwellers from './components/DesertDwellers'
import SocialFliers from './components/SocialFliers'
import SpeedDemons from './components/SpeedDemons'
import VocalMimics from './components/VocalMimics'

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
            <Route path="/tallest-places" element={<TallestPlaces />} />
            <Route path="/deepest-places" element={<DeepestPlaces />} />
            <Route path="/natural-wonders" element={<NaturalWonders />} />
            <Route path="/futuristic-cities" element={<FuturisticCities />} />
            <Route path="/forests" element={<Forests />} />
            <Route path="/caves" element={<Caves />} />
            <Route path="/glaciers" element={<Glaciers />} />
            <Route path="/serendipity" element={<Serendipity />} />
            <Route path="/beautiful-cities" element={<BeautifulCities />} />
            <Route path="/beautiful-parks" element={<BeautifulParks />} />
            <Route path="/islands" element={<Islands />} />
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
            {/* Scientific Wonders */}
            <Route path="/scientific-wonders" element={<ScientificWonders />} />
            <Route path="/scientific-wonders/astronomy" element={<Astronomy />} />
            <Route path="/scientific-wonders/biology" element={<Biology />} />
            <Route path="/scientific-wonders/physics" element={<Physics />} />
            <Route path="/scientific-wonders/earth-sciences" element={<EarthSciences />} />
            <Route path="/scientific-wonders/technology" element={<Technology />} />
            <Route path="/scientific-wonders/medicine" element={<Medicine />} />
            <Route path="/scientific-wonders/mathematics" element={<Mathematics />} />
            <Route path="/scientific-wonders/environmental-science" element={<EnvironmentalScience />} />
            <Route path="/scientific-wonders/computer-science" element={<ComputerScience />} />
            <Route path="/scientific-wonders/neuroscience" element={<Neuroscience />} />
            <Route path="/scientific-wonders/materials-science" element={<MaterialsScience />} />
            <Route path="/scientific-wonders/quantum-physics" element={<QuantumPhysics />} />
            <Route path="/scientific-wonders/biotechnology" element={<Biotechnology />} />
            <Route path="/scientific-wonders/oceanography" element={<Oceanography />} />
            <Route path="/scientific-wonders/renewable-energy" element={<RenewableEnergy />} />
            {/* Birds World */}
            <Route path="/birds-world" element={<BirdsWorld />} />
            <Route path="/birds-world/flight-masters" element={<FlightMasters />} />
            <Route path="/birds-world/ocean-navigators" element={<OceanNavigators />} />
            <Route path="/birds-world/forest-singers" element={<ForestSingers />} />
            <Route path="/birds-world/desert-survivors" element={<DesertSurvivors />} />
            <Route path="/birds-world/arctic-adventurers" element={<ArcticAdventurers />} />
            <Route path="/birds-world/wetland-wonders" element={<WetlandWonders />} />
            <Route path="/birds-world/mountain-soarers" element={<MountainSoarers />} />
            <Route path="/birds-world/night-hunters" element={<NightHunters />} />
            <Route path="/birds-world/colorful-displayers" element={<ColorfulDisplayers />} />
            <Route path="/birds-world/ancient-species" element={<AncientSpecies />} />
            <Route path="/birds-world/urban-adapters" element={<UrbanAdapters />} />
            <Route path="/birds-world/migratory-marvels" element={<MigratoryMarvels />} />
            <Route path="/birds-world/aquatic-specialists" element={<AquaticSpecialists />} />
            <Route path="/birds-world/island-endemics" element={<IslandEndemics />} />
            <Route path="/birds-world/tool-users" element={<ToolUsers />} />
            <Route path="/birds-world/vocal-virtuosos" element={<VocalVirtuosos />} />
            <Route path="/birds-world/cooperative-breeders" element={<CooperativeBreeders />} />
            <Route path="/birds-world/extreme-survivors" element={<ExtremeSurvivors />} />
            <Route path="/birds-world/shape-shifters" element={<ShapeShifters />} />
            <Route path="/birds-world/flightless-wonders" element={<FlightlessWonders />} />
            <Route path="/birds-world/aquatic-masters" element={<AquaticMasters />} />
            <Route path="/birds-world/forest-architects" element={<ForestArchitects />} />
            <Route path="/birds-world/sky-dancers" element={<SkyDancers />} />
            <Route path="/birds-world/jungle-acrobats" element={<JungleAcrobats />} />
            <Route path="/birds-world/ice-sculptors" element={<IceSculptors />} />
            <Route path="/birds-world/desert-engineers" element={<DesertEngineers />} />
            <Route path="/birds-world/coral-gardeners" element={<CoralGardeners />} />
            <Route path="/birds-world/highland-sentinels" element={<HighlandSentinels />} />
            <Route path="/birds-world/night-whisperers" element={<NightWhisperers />} />
            <Route path="/birds-world/mud-architects" element={<MudArchitects />} />
            <Route path="/birds-world/seed-guardians" element={<SeedGuardians />} />
            <Route path="/birds-world/honey-hunters" element={<HoneyHunters />} />
            <Route path="/birds-world/shadow-stalkers" element={<ShadowStalkers />} />
            <Route path="/birds-world/sound-sculptors" element={<SoundSculptors />} />
            {/* New Bird Categories */}
            <Route path="/birds-world/feathered-architects" element={<FeatheredArchitects />} />
            <Route path="/birds-world/masters-of-camouflage" element={<MastersOfCamouflage />} />
            <Route path="/birds-world/high-flyers" element={<HighFlyers />} />
            <Route path="/birds-world/seed-specialists" element={<SeedSpecialists />} />
            <Route path="/birds-world/night-owls" element={<NightOwls />} />
            <Route path="/birds-world/ice-specialists" element={<IceSpecialists />} />
            <Route path="/birds-world/desert-dwellers" element={<DesertDwellers />} />
            <Route path="/birds-world/social-fliers" element={<SocialFliers />} />
            <Route path="/birds-world/speed-demons" element={<SpeedDemons />} />
            <Route path="/birds-world/vocal-mimics" element={<VocalMimics />} />
            {/* AdSense Compliance */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/about-us" element={<AboutUs />} />
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