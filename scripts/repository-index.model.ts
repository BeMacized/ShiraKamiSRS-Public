export interface RepositoryIndex {
    version: "v1";
    name: string;
    imageUrl?: string;
    homePageUrl?: string;
    sets: RepositoryIndexSet[];
}

export interface RepositoryIndexSet {
    name: string;
    exportVersion: string;
    description: string;
    modes: ReviewMode[];
    cardCount: number;
    fileName: string;
}

export type ReviewMode = 'enToJp' | 'jpToEn' | 'kanjiToKana';
