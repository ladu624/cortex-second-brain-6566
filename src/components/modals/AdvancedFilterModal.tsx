import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Filter, X } from "lucide-react";

interface AdvancedFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
}

interface FilterOptions {
  dateRange: {
    from: string;
    to: string;
  };
  categories: string[];
  status: string;
  user: string;
  tags: string[];
}

export function AdvancedFilterModal({ isOpen, onClose, onApply }: AdvancedFilterModalProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: { from: '', to: '' },
    categories: [],
    status: '',
    user: '',
    tags: []
  });

  const [newTag, setNewTag] = useState('');

  const categories = [
    'Textes juridiques',
    'Procédures administratives',
    'Jurisprudence',
    'Réglementations',
    'Formulaires',
    'Documents officiels'
  ];

  const statusOptions = [
    'Tous',
    'Récent',
    'Fréquent',
    'Favori',
    'Archivé'
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFilters(prev => ({
        ...prev,
        categories: [...prev.categories, category]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        categories: prev.categories.filter(c => c !== category)
      }));
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !filters.tags.includes(newTag.trim())) {
      setFilters(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleApply = () => {
    console.log('Applying advanced filters:', filters);
    onApply(filters);
  };

  const handleReset = () => {
    setFilters({
      dateRange: { from: '', to: '' },
      categories: [],
      status: '',
      user: '',
      tags: []
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtres avancés
          </DialogTitle>
          <p className="text-sm text-gray-600 mt-2">
            Affinez votre recherche avec des critères spécifiques
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date Range */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Période
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="date-from" className="text-xs text-gray-600">Du</Label>
                <Input
                  id="date-from"
                  type="date"
                  value={filters.dateRange.from}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    dateRange: { ...prev.dateRange, from: e.target.value }
                  }))}
                />
              </div>
              <div>
                <Label htmlFor="date-to" className="text-xs text-gray-600">Au</Label>
                <Input
                  id="date-to"
                  type="date"
                  value={filters.dateRange.to}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    dateRange: { ...prev.dateRange, to: e.target.value }
                  }))}
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Catégories</Label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="text-sm">{category}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Statut</Label>
            <Select
              value={filters.status}
              onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un statut" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* User */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Utilisateur</Label>
            <Input
              placeholder="Nom de l'utilisateur"
              value={filters.user}
              onChange={(e) => setFilters(prev => ({ ...prev, user: e.target.value }))}
            />
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Tags</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Ajouter un tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button onClick={handleAddTag} variant="outline" size="sm">
                Ajouter
              </Button>
            </div>
            {filters.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {filters.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tag}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0 hover:bg-blue-200"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2">
          <Button variant="outline" onClick={handleReset}>
            Réinitialiser
          </Button>
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button onClick={handleApply}>
            Appliquer les filtres
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}