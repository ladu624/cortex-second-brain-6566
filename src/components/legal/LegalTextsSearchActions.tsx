
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search, Eye, Filter, SortAsc } from 'lucide-react';
import { useGlobalActions } from '@/hooks/useGlobalActions';

interface LegalTextsSearchActionsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddLegalText?: () => void;
  onOpenApprovalQueue?: () => void;
}

export function LegalTextsSearchActions({
  searchTerm,
  onSearchChange,
  onAddLegalText,
  onOpenApprovalQueue
}: LegalTextsSearchActionsProps) {
  const actions = useGlobalActions();
  
  const handleApprovalQueueClick = () => {
    console.log('File d\'approbation clicked - nouvelle version');
    if (onOpenApprovalQueue) {
      onOpenApprovalQueue();
    } else {
      const event = new CustomEvent('open-modal', {
        detail: {
          type: 'approval-queue',
          title: 'File d\'approbation - Textes juridiques',
          data: { context: 'legal-texts' }
        }
      });
      window.dispatchEvent(event);
    }
  };

  const handleFilter = () => {
    actions.handleFilter('legal-texts');
  };

  const handleSort = () => {
    const event = new CustomEvent('open-modal', {
      detail: {
        type: 'sort',
        title: 'Options de tri',
        data: { context: 'legal-texts' }
      }
    });
    window.dispatchEvent(event);
  };

  const handleAddClick = () => {
    if (onAddLegalText) {
      onAddLegalText();
    } else {
      actions.handleAddLegalText();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      {/* Barre de recherche */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Rechercher des textes juridiques..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      
      {/* Boutons d'action */}
      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" size="sm" onClick={handleFilter}>
          <Filter className="w-4 h-4 mr-2" />
          Filtrer
        </Button>
        
        <Button variant="outline" size="sm" onClick={handleSort}>
          <SortAsc className="w-4 h-4 mr-2" />
          Trier
        </Button>
        
        {/* Bouton File d'approbation - Version corrigée inspirée des procédures administratives */}
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleApprovalQueueClick}
          className="bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-300 transition-colors"
        >
          <Eye className="w-4 h-4 mr-2" />
          File d'approbation
        </Button>
        
        <Button size="sm" onClick={handleAddClick}>
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un texte
        </Button>
      </div>
    </div>
  );
}
