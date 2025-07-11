
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from 'lucide-react';
import { useGlobalActions } from '@/hooks/useGlobalActions';

interface ActionButtonsProps {
  resourceType?: 'ouvrage' | 'revue' | 'journal' | 'article' | 'video' | 'directory';
}

export function ActionButtons({ resourceType = 'ouvrage' }: ActionButtonsProps) {
  const actions = useGlobalActions();

  const handleAddNew = () => {
    console.log('Opening add library resource form:', resourceType);
    actions.handleAddLibraryResource(resourceType);
  };

  const handleEnrichment = () => {
    console.log('Opening enrichment with file import from library action buttons...');
    actions.handleImport(['.pdf', '.doc', '.docx', '.txt']);
  };

  return (
    <div className="flex justify-center gap-3 mb-6">
      <Button className="gap-2" onClick={handleAddNew}>
        <Plus className="w-4 h-4" />
        Ajouter
      </Button>
      <Button variant="outline" className="gap-2" onClick={handleEnrichment}>
        <Upload className="w-4 h-4" />
        Enrichir
      </Button>
    </div>
  );
}
