
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Upload } from 'lucide-react';
import { useGlobalActions } from '@/hooks/useGlobalActions';

interface ActionButtonsProps {
  resourceType?: 'ouvrages' | 'revues' | 'journaux' | 'articles' | 'videos';
}

export function ActionButtons({ resourceType = 'ouvrages' }: ActionButtonsProps) {
  const actions = useGlobalActions();

  const handleEnrichment = () => {
    console.log('Opening enrichment with file import from library action buttons...');
    actions.handleImport(['.pdf', '.doc', '.docx', '.txt']);
  };

  const getResourceTypeName = (type: string) => {
    switch(type) {
      case 'ouvrages': return 'Ouvrage';
      case 'revues': return 'Revue';
      case 'journaux': return 'Journal';
      case 'articles': return 'Article';
      case 'videos': return 'Vidéo';
      default: return 'Ressource';
    }
  };

  const handleAddResource = () => {
    console.log('Opening add resource dialog for:', resourceType);
    
    const resourceName = getResourceTypeName(resourceType);
    const title = prompt(`Titre du/de la ${resourceName.toLowerCase()} :`);
    
    if (title && title.trim()) {
      const author = prompt(`${resourceType === 'videos' ? 'Intervenant' : 'Auteur'} :`);
      const category = prompt('Catégorie (droit-civil, droit-penal, etc.) :');
      
      // Simuler l'ajout
      setTimeout(() => {
        alert(`${resourceName} "${title}" ajouté(e) avec succès !`);
        
        // Événement pour notifier l'ajout
        const event = new CustomEvent('resource-added', {
          detail: {
            type: resourceType,
            title,
            author,
            category
          }
        });
        window.dispatchEvent(event);
      }, 500);
    }
  };

  return (
    <div className="flex justify-center gap-3 mb-6">
      <Button className="gap-2" onClick={handleAddResource}>
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
