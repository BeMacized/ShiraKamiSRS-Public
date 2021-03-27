export interface RepositoryIndex {
    name: string;
    imageUrl?: string;
    sets: RepositoryIndexSet[];
}

export interface RepositoryIndexSet {
    exportVersion: string;
    name: string;
    description: string;
    modes: ReviewMode[];
    cardCount: number;
    fileName: string;
}

export type ReviewMode = 'enToJp' | 'jpToEn' | 'kanjiToKana';
