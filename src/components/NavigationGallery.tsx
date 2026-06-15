import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  FileText,
  FolderOpen,
  LayoutPanelTop,
  ListTree,
  Music2,
  Settings,
  ShieldCheck,
} from 'lucide-react';

type NavigationSpec = {
  enName: string;
  koName: string;
  role: string;
  state: string;
  usage: string;
};

const tabSpecs: NavigationSpec[] = [
  {
    enName: 'Page Tabs',
    koName: '페이지 탭',
    role: '동일 화면 안에서 큰 콘텐츠 범주를 전환합니다.',
    state: 'default, active, hover, disabled, overflow',
    usage: 'Result details, account settings, design kit sections',
  },
  {
    enName: 'Segmented Tabs',
    koName: '세그먼트 탭',
    role: '서로 배타적인 모드나 짧은 필터를 빠르게 전환합니다.',
    state: 'selected, unselected, disabled',
    usage: 'Preview mode, filter mode, recording source',
  },
  {
    enName: 'Compact Tabs',
    koName: '컴팩트 탭',
    role: '모바일에서 작은 공간에 주요 전환 옵션을 제공합니다.',
    state: 'selected, scrollable, overflow',
    usage: 'Mobile reports, compact inspector, audio states',
  },
];

const treeSpecs: NavigationSpec[] = [
  {
    enName: 'Component Tree',
    koName: '컴포넌트 트리',
    role: '깊이가 있는 컴포넌트/문서 구조를 접고 펼쳐 탐색합니다.',
    state: 'expanded, collapsed, selected, disabled',
    usage: 'Design kit navigation, component docs, token hierarchy',
  },
  {
    enName: 'Flow Tree',
    koName: '플로우 트리',
    role: '제품 플로우의 phase와 하위 화면을 계층적으로 보여줍니다.',
    state: 'active phase, completed phase, locked phase',
    usage: 'Learner flow, auth flow, recording flow',
  },
];

export function TabsGalleryPreview() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeMode, setActiveMode] = useState('Preview');

  return (
    <section className="vv-system-gallery" aria-label="탭 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <LayoutPanelTop aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Tabs</span>
        <h2>탭 컴포넌트</h2>
        <p>페이지, 섹션, 모드 전환을 명확하게 구분하는 navigation control입니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Page Tabs"
            koName="페이지 탭"
            role="상세 화면 안의 큰 정보 범주를 전환합니다."
          />
          <div className="vv-tabs-demo" role="tablist" aria-label="페이지 탭 예시">
            {['Overview', 'Tokens', 'States', 'Usage'].map((tab) => (
              <button
                aria-selected={activeTab === tab}
                className={activeTab === tab ? 'is-active' : ''}
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="vv-tab-panel" role="tabpanel">
            <strong>{activeTab}</strong>
            <span>선택된 탭의 콘텐츠 영역입니다.</span>
          </div>
        </article>

        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Segmented Tabs"
            koName="세그먼트 탭"
            role="짧은 모드 전환을 compact하게 처리합니다."
          />
          <div className="vv-segmented-tabs" role="tablist" aria-label="모드 전환">
            {['Preview', 'Specs', 'Code'].map((mode) => (
              <button
                aria-selected={activeMode === mode}
                className={activeMode === mode ? 'is-active' : ''}
                key={mode}
                onClick={() => setActiveMode(mode)}
                role="tab"
                type="button"
              >
                {mode}
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function TabsGalleryCatalog() {
  return <NavigationCatalog specs={tabSpecs} icon={LayoutPanelTop} />;
}

export function TreeGalleryPreview() {
  const [isFoundationsOpen, setFoundationsOpen] = useState(true);
  const [isAudioOpen, setAudioOpen] = useState(true);
  const [selectedNode, setSelectedNode] = useState('Audio Controls');

  return (
    <section className="vv-system-gallery" aria-label="트리 컴포넌트">
      <div className="vv-system-hero">
        <span className="vv-system-hero-icon">
          <ListTree aria-hidden size={22} />
        </span>
        <span className="vv-kicker">Tree</span>
        <h2>트리 컴포넌트</h2>
        <p>컴포넌트, 문서, 플로우처럼 깊이가 있는 정보를 접고 펼쳐 탐색합니다.</p>
      </div>

      <div className="vv-component-stack">
        <article className="vv-component-demo-card">
          <ComponentDemoHeader
            enName="Component Tree"
            koName="컴포넌트 트리"
            role="그룹과 하위 컴포넌트를 계층적으로 탐색합니다."
          />
          <div className="vv-tree-demo" role="tree" aria-label="컴포넌트 트리 예시">
            <TreeFolder
              icon={FolderOpen}
              isOpen={isFoundationsOpen}
              label="Foundations"
              onToggle={() => setFoundationsOpen((value) => !value)}
            />
            {isFoundationsOpen ? (
              <div className="vv-tree-children">
                {['Design Tokens', 'Icon Library', 'Typography'].map((node) => (
                  <TreeLeaf
                    icon={FileText}
                    key={node}
                    label={node}
                    onSelect={setSelectedNode}
                    selected={selectedNode === node}
                  />
                ))}
              </div>
            ) : null}

            <TreeFolder
              icon={Music2}
              isOpen={isAudioOpen}
              label="Audio Experience"
              onToggle={() => setAudioOpen((value) => !value)}
            />
            {isAudioOpen ? (
              <div className="vv-tree-children">
                {['Audio Controls', 'Feedback'].map((node) => (
                  <TreeLeaf
                    icon={Settings}
                    key={node}
                    label={node}
                    onSelect={setSelectedNode}
                    selected={selectedNode === node}
                  />
                ))}
              </div>
            ) : null}
          </div>
          <div className="vv-tab-panel">
            <strong>{selectedNode}</strong>
            <span>현재 선택된 tree node입니다.</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export function TreeGalleryCatalog() {
  return <NavigationCatalog specs={treeSpecs} icon={ListTree} />;
}

function NavigationCatalog({
  icon: Icon,
  specs,
}: {
  icon: typeof LayoutPanelTop;
  specs: NavigationSpec[];
}) {
  return (
    <div className="vv-inspector-list">
      {specs.map((spec) => (
        <article className="vv-inspector-item" key={spec.enName}>
          <span className="vv-inspector-item-icon">
            <Icon aria-hidden size={20} />
          </span>
          <div>
            <strong>
              {spec.koName} <em>({spec.enName})</em>
            </strong>
            <p>{spec.role}</p>
            <small>
              {spec.usage} · {spec.state}
            </small>
          </div>
        </article>
      ))}
    </div>
  );
}

function TreeFolder({
  icon: Icon,
  isOpen,
  label,
  onToggle,
}: {
  icon: typeof FolderOpen;
  isOpen: boolean;
  label: string;
  onToggle: () => void;
}) {
  return (
    <button
      aria-expanded={isOpen}
      className="vv-tree-row vv-tree-folder"
      onClick={onToggle}
      role="treeitem"
      type="button"
    >
      {isOpen ? <ChevronDown aria-hidden size={15} /> : <ChevronRight aria-hidden size={15} />}
      <Icon aria-hidden size={16} />
      <strong>{label}</strong>
    </button>
  );
}

function TreeLeaf({
  icon: Icon,
  label,
  onSelect,
  selected,
}: {
  icon: typeof ShieldCheck;
  label: string;
  onSelect: (label: string) => void;
  selected: boolean;
}) {
  return (
    <button
      aria-selected={selected}
      className={`vv-tree-row vv-tree-leaf ${selected ? 'is-selected' : ''}`}
      onClick={() => onSelect(label)}
      role="treeitem"
      type="button"
    >
      <span aria-hidden />
      <Icon aria-hidden size={15} />
      <strong>{label}</strong>
    </button>
  );
}

function ComponentDemoHeader({
  enName,
  koName,
  role,
}: {
  enName: string;
  koName: string;
  role: string;
}) {
  return (
    <header className="vv-component-demo-header">
      <span className="vv-kicker">{enName}</span>
      <h3>
        {koName} <em>({enName})</em>
      </h3>
      <p>{role}</p>
    </header>
  );
}
