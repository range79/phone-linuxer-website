import { useDetectedOS } from "./hooks/useDetectedOS";
import { DeveloperSection } from "./components/DeveloperSection";
import { Footer } from "./components/Footer";
import { HardwareVirtualizationSection } from "./components/HardwareVirtualizationSection";
import { Hero } from "./components/Hero";
import { MaxPerformanceSection } from "./components/MaxPerformanceSection";
import { Navbar } from "./components/Navbar";
import { PerformanceHierarchySection } from "./components/PerformanceHierarchySection";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { SmartEngineSection } from "./components/SmartEngineSection";
import { SpecsSection } from "./components/SpecsSection";
import { SpiceSection } from "./components/SpiceSection";
import { TitanModeSection } from "./components/TitanModeSection";
import { VmManagementSection } from "./components/VmManagementSection";

export default function App() {
  const detected = useDetectedOS();

  return (
    <>
      <ParticleCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <PerformanceHierarchySection />
          <SmartEngineSection />
          <VmManagementSection />
          <TitanModeSection />
          <MaxPerformanceSection />
          <HardwareVirtualizationSection />
          <SpecsSection />
          <SpiceSection detected={detected} />
          <DeveloperSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
